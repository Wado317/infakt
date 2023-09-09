import { useEffect, useState } from "react";
import styled from "styled-components";
import AccountantCard from "../components/AccountantCard/AccountantCard.component";

type AccountantType = {
  cell: string; // numer telefonu
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};

type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1130px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Home = () => {
  const [userData, setUserData] = useState<AccountantType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?gender=female&results=4"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setUserData(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CardContainer>
        {isLoading ? (
          <>loading...</>
        ) : (
          userData?.map((accountant) => (
            <AccountantCard
              key={accountant.login.uuid}
              firstName={accountant.name.first}
              lastName={accountant.name.last}
              imgSrc={accountant.picture.thumbnail}
              email={accountant.email}
              cell={accountant.cell}
            />
          ))
        )}
      </CardContainer>
    </>
  );
};

export default Home;
