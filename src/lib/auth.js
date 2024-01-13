import GoogleProvider from "next-auth/providers/google";

// დავწეროთ ავტორიზაციის პარამეტრები NextAuthOptions ინტერფეისის გამოყენებით
export const authOptions = {
  // აქ შეგიძლიათ თქვენი გვერდი გამოიყენოთ შესვლისთვის
  pages: {
    signIn: "/login", // ამ გვერდზე გადადის მომხმარებელი ავტორიზაციისას
  },
  // secret key
  secret: process.env.NEXT_PUBLIC_SECRET,
  // აუთენთიფიკაციის პროვაიდერები
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({}), // თუ დაგჭირდათ იმეილით და პაროლით შესვლა (email/password)
  ],
};
