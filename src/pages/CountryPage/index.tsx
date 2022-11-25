import React from "react";

import PageSkeleton from "../../components/PageSkeleton";

import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY_DATA = gql`
  query GetCountries {
    countries {
      name
      capital
    }
  }
`;

export default function CountryPage() {
  const { data } = useQuery(GET_COUNTRY_DATA);

  console.log("countries", data);

  return (
    <div className="Home__bg">
      <div className="Home__layer">
        <PageSkeleton
          title="Countries"
          subtitle="Shows countries in the Console"
        ></PageSkeleton>
      </div>
    </div>
  );
}
