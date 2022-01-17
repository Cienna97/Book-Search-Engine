import { gql } from '@apollo/client';
//LOGIN_USER execute loginUser mutation

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//ADD_USER execute addUser mutation

export const ADD_USER = gql`
mutation addUser($username: String!, $email:
    String!, $password: String!) {
        addUser(username: $username, email:
            $email, password: $password) {
                token
                user {
                    _id
                    username
                }
            }
        }
`;
//SAVE_BOOK execute saveBook mutation

//REMOVE_BOOK execute removeBook mutation
