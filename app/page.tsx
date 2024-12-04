import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Card name="Nooreh" roll={876} day="Sunday" address="Islamabad" email="qwt@email.com" time={"6pm to 10pm"} />
      <Card name="Naimal" roll={987} day="Monday" address="Karachi" email="zaq@email.com" time={"9pm to 11pm"} />
      <Card name="Mishal" roll={348} day="Tuesday" address="Lahore" email="nwy@email.com" time={"5pm to 8pm"} />
      
      </>
  );
}