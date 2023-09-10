import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import AccountantCard from "../components/AccountantCard/AccountantCard.component";
import Button from "../components/Button/Button.component";
import AccountantCardSkeleton from "../components/skeletons/AccountantCardSkeleton/AccountantCardSkeleton.component";

type AccountantType = {
  cell: string;
  gender: string;
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

const Flex = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;
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

const Accountants = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<AccountantType[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://randomuser.me/api/?results=4&page=${page}`
      );
      const jsonData = await response.json();
      setData([...data, ...jsonData.results]);
      setIsFirstLoading(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [page, data]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const loadMoreData = () => {
    setPage(page + 1);
  };

  return (
    <Flex>
      <CardContainer>
        {isFirstLoading
          ? [1, 2, 3, 4].map((item) => <AccountantCardSkeleton key={item} />)
          : data?.map((accountant) => (
              <AccountantCard
                key={accountant.login.uuid}
                gender={accountant.gender}
                firstName={accountant.name.first}
                lastName={accountant.name.last}
                imgSrc={accountant.picture.thumbnail}
                email={accountant.email}
                cell={accountant.cell}
              />
            ))}
      </CardContainer>
      <Button
        onClick={loadMoreData}
        text={isLoading ? "Loading..." : "Load more"}
      />
    </Flex>
  );
};

export default Accountants;
