import { Card } from "@Components";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto mt-10 flex flex-wrap justify-between">
        <Card
          image={"/blogimg.webp"}
          categories={["Travel"]}
          date={"Jan 11, 2024"}
          title={
            "Your most unhappy customers are your greatest source of learning."
          }
          description={
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          }
          author={{
            authorName: "Sergy Campbell",
            authorPic: "/person_1.jpg.webp",
            authorPosition: "CEO and Founder",
          }}
        />
      </div>
    </div>
  );
}
