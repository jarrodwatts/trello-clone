/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorkspace = /* GraphQL */ `
  mutation CreateWorkspace(
    $input: CreateWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    createWorkspace(input: $input, condition: $condition) {
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
export const updateWorkspace = /* GraphQL */ `
  mutation UpdateWorkspace(
    $input: UpdateWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    updateWorkspace(input: $input, condition: $condition) {
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
export const deleteWorkspace = /* GraphQL */ `
  mutation DeleteWorkspace(
    $input: DeleteWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    deleteWorkspace(input: $input, condition: $condition) {
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
export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
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
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
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
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
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
