import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// Simple in-memory OTP storage for demo purposes
const otpStorage: Record<string, { otp: string; expires: number }> = {};

// Temporary in-memory user database (for demo purposes)
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@indianaccounting.com",
    password: "admin123", // In production, use hashed passwords
    role: "admin"
  },
  {
    id: "2",
    name: "Regular User",
    email: "user@indianaccounting.com",
    password: "user123", // In production, use hashed passwords
    role: "user"
  }
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        // In production, you would verify against a real database
        // and check hashed passwords
        const user = users.find(user => 
          user.email === credentials.email && 
          user.password === credentials.password
        );

        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          };
        } else {
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // Mobile OTP provider (custom)
    CredentialsProvider({
      name: "Mobile OTP",
      credentials: {
        mobile: { label: "Mobile Number", type: "text" },
        otp: { label: "OTP", type: "text" }
      },
      async authorize(credentials: any) {
        // In a real app, you would:
        // 1. Generate and send OTP to the mobile number
        // 2. Store the OTP with expiration
        // 3. Verify the OTP here
        
        // For demo purposes, we'll use a simple approach
        const mobile = credentials.mobile;
        const otp = credentials.otp;
        
        // Check if this is a new mobile number (sign-up)
        const existingUser = users.find(user => user.email === mobile + "@mobile.com");
        
        if (!existingUser) {
          // Auto-create user for demo (in production, you'd have a proper sign-up flow)
          const newUser = {
            id: String(users.length + 1),
            name: "Mobile User " + mobile.slice(-4),
            email: mobile + "@mobile.com",
            password: "", // Not used for mobile auth
            role: "user"
          };
          users.push(newUser);
          
          return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
          };
        }
        
        // For demo, accept any 6-digit OTP
        if (otp && otp.length === 6 && /^\d+$/.test(otp)) {
          return {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role
          };
        }
        
        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.role = token.role;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-here-change-in-production"
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };