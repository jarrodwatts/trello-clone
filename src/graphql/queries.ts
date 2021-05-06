/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkspace = /* GraphQL */ `
  query GetWorkspace($id: ID!) {
    getWorkspace(id: $id) {
      id
      name
      description
      owner
      createdAt
      updatedAt
      boards {
        items {
          id
          workspaceId
          name
          description
          owner
          visibility
          isTemplate
          createdAt
          updatedAt
          columns {
            items {
              id
              owner
              boardId
              name
              tickets {
                id
                columnId
                title
                description
                labels {
                  name
                  color
                }
              }
              columnIndex
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listWorkspaces = /* GraphQL */ `
  query ListWorkspaces(
    $filter: ModelWorkspaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
        createdAt
        updatedAt
        boards {
          items {
            id
            workspaceId
            name
            description
            owner
            visibility
            isTemplate
            createdAt
            updatedAt
            columns {
              items {
                id
                owner
                boardId
                name
                tickets {
                  id
                  columnId
                  title
                  description
                  labels {
                    name
                    color
                  }
                }
                columnIndex
                createdAt
                updatedAt
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
export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
      id
      workspaceId
      name
      description
      owner
      visibility
      isTemplate
      createdAt
      updatedAt
      columns {
        items {
          id
          owner
          boardId
          name
          tickets {
            id
            columnId
            title
            description
            labels {
              name
              color
            }
          }
          columnIndex
          createdAt
          updatedAt
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
        workspaceId
        name
        description
        owner
        visibility
        isTemplate
        createdAt
        updatedAt
        columns {
          items {
            id
            owner
            boardId
            name
            tickets {
              id
              columnId
              title
              description
              labels {
                name
                color
              }
            }
            columnIndex
            createdAt
            updatedAt
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
      owner
      boardId
      name
      tickets {
        id
        columnId
        title
        description
        labels {
          name
          color
        }
      }
      columnIndex
      createdAt
      updatedAt
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
        owner
        boardId
        name
        tickets {
          id
          columnId
          title
          description
          labels {
            name
            color
          }
        }
        columnIndex
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
