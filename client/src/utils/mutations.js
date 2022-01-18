import { gql } from '@apollo/react-hooks';
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

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;


//REMOVE_BOOK execute removeBook mutation

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
