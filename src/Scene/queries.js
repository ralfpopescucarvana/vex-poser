import { gql } from '@apollo/client';

export const GET_VEHICLE = gql`
query GetVehicle($input: QueryVehicleInput!) {
  vehicle(input: $input) {
    id
    features {
      id
      price
      packageName
      isRare
      isValuable
      file {
        url
      }
      genericFeature {
        id
        name
        description
        normalizedName
        sourceType {
          id
          name
        }
      }
      linkedFeatures {
        id
        price
        packageName
        isRare
        isValuable
        genericFeature {
          id
          name
          description
        }
      }
    }
  }
}
`;

