import { graphql } from 'gatsby';
import React from 'react';

export default function PizzasPage({ data }) {
  console.log(data);
  return (
    <>
      <h3>There are {data.pizzas.nodes.length} pizzas here</h3>
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
