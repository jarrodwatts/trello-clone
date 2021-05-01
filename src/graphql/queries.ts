/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
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
export const listBoards = /* GraphQL */ `
  query ListBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getColumn = /* GraphQL */ `
  query GetColumn($id: ID!) {
    getColumn(id: $id) {
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
export const listColumns = /* GraphQL */ `
  query ListColumns(
    $filter: ModelColumnFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColumns(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
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
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      ticketId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
