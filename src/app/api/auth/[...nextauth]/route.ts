import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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