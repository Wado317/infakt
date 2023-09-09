import styled from "styled-components";
import { AccountantSection } from "../AccountantSection/AccountantSection.component";
import Button from "../Button/Button.component";
import Card from "../Card/Card.component";
import TextSection from "../TextSection/TextSection.component";

const CardFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PRICE = 350;

type Props = {
  imgSrc: string;
  email: string;
  cell: string;
  firstName: string;
  lastName: string;
  gender: string;
};

const AccountantCard = ({
  imgSrc,
  email,
  cell,
  firstName,
  lastName,
  gender,
}: Props) => {
  return (
    <Card width="300px" height="376px">
      <CardFlex>
        <AccountantSection
          imgSrc={imgSrc}
          firstName={firstName}
          lastName={lastName}
          gender={gender}
        />
        <TextSection header="E-mail" content={email} underline />
        <TextSection header="Telefon" content={cell} />
        <TextSection
          header="Średnia cena netto usługi / m-c"
          content={`${PRICE} PLN`}
        />

        <Button text="Dowiedz się więcej" />
      </CardFlex>
    </Card>
  );
};

export default AccountantCard;
