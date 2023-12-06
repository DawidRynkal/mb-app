"use server";

import { CarsConnectionProps } from "@/types";
import { request, gql } from "graphql-request";

const grapqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getCarsServer = async (numberOfCars: number) => {
  const query = gql`
    query MyQuery($numberOfCars: Int!) {
      carModyficationsConnection(first: $numberOfCars) {
        edges {
          node {
            id
            engine
            fuelType
            model
            niutonometeAfterNm
            niutonometerBeforeNm
            powerAterKm
            powerBeforeKm
            powerUpImage {
              url
            }
            publishedAt
            subModel
            transmission
            carImage {
              url
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `;

  const result: { carModyficationsConnection: CarsConnectionProps } =
    await request(grapqlAPI, query, {
      numberOfCars,
    });

  return result.carModyficationsConnection;
};
