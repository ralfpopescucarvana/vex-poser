import { gql } from '@apollo/client';

export const ADD_FEATURE_LINK = gql`
mutation AddFeatureLink($input: AddFeatureLinkInput!) {
      addFeatureLink(input: $input) {
        feature {
          id
          genericFeature {
            id
            name
          }
          linkedFeatures {
            id
            genericFeature {
              id
              name
            }
          }
        }
    		linkedFeature {
          id
          genericFeature {
            id
            name
          }
        }
      }
    }
`