/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
      id
      name
      description
      owner
      editors
      createdAt
      updatedAt
      columns {
        items {
          id
          boardId
          name
          owner
          createdAt
          updatedAt
          tickets {
            items {
              id
              columnId
              title
              description
              labels {
                id
                name
                color
              }
              owner
              createdAt
              updatedAt
              comments {
                items {
                  id
                  ticketId
                  content
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
      id
      name
      description
      owner
      editors
      createdAt
      updatedAt
      columns {
        items {
          id
          boardId
          name
          owner
          createdAt
          updatedAt
          tickets {
            items {
              id
              columnId
              title
              description
              labels {
                id
                name
                color
              }
              owner
              createdAt
              updatedAt
              comments {
                items {
                  id
                  ticketId
                  content
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
      id
      name
      description
      owner
      editors
      createdAt
      updatedAt
      columns {
        items {
          id
          boardId
          name
          owner
          createdAt
          updatedAt
          tickets {
            items {
              id
              columnId
              title
              description
              labels {
                id
                name
                color
              }
              owner
              createdAt
              updatedAt
              comments {
                items {
                  id
                  ticketId
                  content
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createColumn = /* GraphQL */ `
  mutation CreateColumn(
    $input: CreateColumnInput!
    $condition: ModelColumnConditionInput
  ) {
    createColumn(input: $input, condition: $condition) {
      id
      boardId
      name
      owner
      createdAt
      updatedAt
      tickets {
        items {
          id
          columnId
          title
          description
          labels {
            id
            name
            color
          }
          owner
          createdAt
          updatedAt
          comments {
            items {
              id
              ticketId
              content
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateColumn = /* GraphQL */ `
  mutation UpdateColumn(
    $input: UpdateColumnInput!
    $condition: ModelColumnConditionInput
  ) {
    updateColumn(input: $input, condition: $condition) {
      id
      boardId
      name
      owner
      createdAt
      updatedAt
      tickets {
        items {
          id
          columnId
          title
          description
          labels {
            id
            name
            color
          }
          owner
          createdAt
          updatedAt
          comments {
            items {
              id
              ticketId
              content
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteColumn = /* GraphQL */ `
  mutation DeleteColumn(
    $input: DeleteColumnInput!
    $condition: ModelColumnConditionInput
  ) {
    deleteColumn(input: $input, condition: $condition) {
      id
      boardId
      name
      owner
      createdAt
      updatedAt
      tickets {
        items {
          id
          columnId
          title
          description
          labels {
            id
            name
            color
          }
          owner
          createdAt
          updatedAt
          comments {
            items {
              id
              ticketId
              content
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      columnId
      title
      description
      labels {
        id
        name
        color
      }
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          ticketId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      columnId
      title
      description
      labels {
        id
        name
        color
      }
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          ticketId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      columnId
      title
      description
      labels {
        id
        name
        color
      }
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          ticketId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      ticketId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      ticketId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      ticketId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
