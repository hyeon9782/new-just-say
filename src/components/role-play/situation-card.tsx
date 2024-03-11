import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  situation: {
    title: string;
    my_role: string;
    ai_role: string;
    scenario: string;
  };
};

const SituationCard = ({ situation }: Props) => {
  const { title, my_role, ai_role, scenario } = situation;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{scenario}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="font-bold pb-2">나의 역할: {my_role}</div>
        <div className="font-bold">AI의 역할: {ai_role}</div>
      </CardContent>
    </Card>
  );
};

export default SituationCard;
