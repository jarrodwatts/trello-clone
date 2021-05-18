/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkspace = /* GraphQL */ `
  query GetWorkspace($id: ID!) {
    getWorkspace(id: $id) {
      id
      name
      description
      boards {
        items {
          id
          workspaceId
          name
          description
          columns {
            id
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
          }
          owner
          editors
          visibility
          isTemplate
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      editors
      createdAt
      updatedAt
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
        boards {
          items {
            id
            workspaceId
            name
            description
            columns {
              id
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
            }
            owner
            editors
            visibility
            isTemplate
            image
            createdAt
            updatedAt
          }
          nextToken
        }
        owner
        editors
        createdAt
        updatedAt
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
      columns {
        id
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
      }
      owner
      editors
      visibility
      isTemplate
      image
      createdAt
      updatedAt
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
        columns {
          id
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
        }
        owner
        editors
        visibility
        isTemplate
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
