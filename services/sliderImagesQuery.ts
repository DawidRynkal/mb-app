"use server";

import { SliderImagesType } from "@/types";
import { request, gql } from "graphql-request";

const grapqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getSliderImagesServer = async () => {
  const query = gql`
    query MyQuery {
      slider_images {
        slide1 {
          url
        }
        slide2 {
          url
        }
        slide3 {
          url
        }
        slide4 {
          url
        }
      }
    }
  `;

  const results: SliderImagesType = await request(grapqlAPI, query);

  return results.slider_images[0];
};
