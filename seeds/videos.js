/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("videos").del();
  await knex("videos").insert([
    {
      id: "83433026-ca32-4c6d-bd86-a39ee8b7303e",
      technique_name: "Closed Guard",
      description:
        "A skilled closed guard player chooses when to maintain control and when to open and attack, rather than allowing the top player to grind them down and force them to open their guard. Taking the time to develop several high-percentage sweeps and submissions — such as the hip-bump sweep or the triangle choke — will eventually turn you into a deadly closed guard player.",
        video: "http://localhost:8080/videos/bjj0.mov",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1626032763000,
    },
    {
      id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
      technique_name: "Diagonal X-Guard",
      description:
        "To initiate X-guard, your opponent must have passed a foot over your thigh in a standing position, such that his shin and foot are next to your hip. You need to cross your legs and extend them to the opponent’s far leg. You will then flex your feet to trap their far thigh between both of your flexed feet, allowing you to off-base the opponent to set up sweeps and transitions to other open-guards such as single leg X.",
        video: "http://localhost:8080/videos/bjj1.MP4",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1625158995000,
    },
    {
      id: "8f16bd30-bab5-40af-aca2-b63d5fdd1acc",
      technique_name: "Arm Bar",
      description:
        "Placing your legs across your opponent's chest, with one of his arms between your thighs and with the elbow joint against your hips. From that position your opponent's arm is grabbed with your arms and his forearm is placed onto your chest. Apply upwards pressure from your hips, while slightly pulling the hand towards your chest and in the direction of their pinky finger. Very little pressure is necessary to make the hold effective.",

        video: "http://localhost:8080/videos/bjj2.mov",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1622991672000,
    },
    {
      id: "bdc6bb69-e09c-498d-8abd-be2792504d00",
      technique_name: "Back Take from X-Guard",
      description:
        "From x-guard, controlling one of the sleeves, hook the closest leg with your arm bringing the opponent's  foot to the side of your neck. Grip the pants and pass the leg over your face.  With the same hand grab the belt at the back of the opponent and push his body away with your feet positioned higher than their knee line. This will imbalance them and they will fall on their butt straight into your guard. Take the back.",
        video: "http://localhost:8080/videos/bjj3.MP4",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1620850202000,
    },
    {
      id: "c0ba64a8-0ecb-4a7d-ab7f-2dbbd1d437b1",
      technique_name: "Half Guard",
      description:
        "Between a full guard and side control or full mount. The combatant on top will try to untangle the leg and pass to obtain side control or mount, while the bottom combatant will try to transition into a full guard or alternatively attempt a sweep or submission.",
        video: "http://localhost:8080/videos/bjj4.MOV",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1630656720000,
    },
    {
      id: "d9ef9352-2367-4272-8884-70cf80cb7a38",
      technique_name: "Half to Full Guard",
      description:
        "Basically take control again passing from the side guard to full guard.",
        video: "http://localhost:8080/videos/bjj5.mov",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1630963412000,
    },
    {
      id: "7c79d334-6b90-4052-9def-aa9b8519c9fb",
      technique_name: "Butterfly Guard to Closed Guard",
      description:
        "Un-hook opponent's legs passing your legs around their waist 'locking' your feet behind their back.",
        video: "http://localhost:8080/videos/bjj6.MOV",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1631532721000,
    },
    {
      id: "72c826ba-fde0-4aae-9aaf-95c6072946cd",
      technique_name: "Mount",
      description:
        "Mount or mounted position is a dominant position, where one combatant sits on the other combatants torso with the face pointing towards the opponent's head.",
        video: "http://localhost:8080/videos/bjj7.MOV",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1631892222000,
    },
    {
      id: "705b808f-d8a0-4713-a796-8653c5c5952b",
      technique_name: "Guard Pulling",
      description:
        "Instead of wasting energy fighting their opponents to the ground from standing, guard players would just pull them into their guard.",
        video: "http://localhost:8080/videos/bjj8.MOV",
      user_id: "2c0d90bd-558e-4991-b31a-7d55e162a45d",
      // updated_at: 1632344461000,
    },
  ]);
};
