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
    username: "admin",
    email: "admin@indianaccounting.com",
    password: "admin123", // In production, use hashed passwords
    role: "admin"
  },
  {
    id: "2",
    name: "Regular User",
    username: "user",
    email: "user@indianaccounting.com",
    password: "user123", // In production, use hashed passwords
    role: "user"
  }
];

// Password reset tokens storage (for demo)
const resetTokens: Record<string, { email: string; expires: number }> = {};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any) {
        // Handle signup if it's a new user
        if (credentials.action === 'signup') {
          // Check if user already exists
          const existingUser = users.find(user => 
            user.email === credentials.email || 
            user.username === credentials.username
          );
          
          if (existingUser) {
            return null; // User already exists
          }
          
          // Create new user
          const newUser = {
            id: String(users.length + 1),
            name: credentials.name || credentials.username,
            username: credentials.username || credentials.email.split('@')[0],
            email: credentials.email,
            password: credentials.password, // In production, hash this!
            role: "user"
          };
          
          users.push(newUser);
          
          return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,
            role: newUser.role
          };
        }
        
        // Handle login
        const user = users.find(user => 
          (user.email === credentials.email || user.username === credentials.email) &&
          user.password === credentials.password
        );

        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
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
            username: "mobile_" + mobile.slice(-4),
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
    }),
    // Password reset provider (custom)
    CredentialsProvider({
      name: "Password Reset",
      credentials: {
        email: { label: "Email", type: "email" },
        token: { label: "Reset Token", type: "text" },
        newPassword: { label: "New Password", type: "password" }
      },
      async authorize(credentials: any) {
        // In a real app, you would verify the reset token
        // For demo, we'll accept any token
        
        const user = users.find(user => user.email === credentials.email);
        
        if (user && credentials.token && credentials.newPassword) {
          // Update password (in demo, we just return the user)
          // In production, you would actually update the password
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            role: user.role
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