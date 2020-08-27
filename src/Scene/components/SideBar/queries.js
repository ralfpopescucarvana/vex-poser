import { gql } from '@apollo/client';

export const ADD_FEATURE_LINK = gql`
mutation AddFeatureLink($input: AddFeatureLinkInput!) {
      addFeatureLink(input: $input) {
        feature {
          id
          genericFeature {
            name
          }
          linkedFeatures {
            id
            genericFeature {
              name
            }
          }
        }
    		linkedFeature {
          id
          genericFeature {
            name
          }
        }
      }
    }
`