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
      members
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
          editors
          visibility
          isTemplate
          createdAt
          updatedAt
          columns {
            items {
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
                owner
                ticketIndex
              }
              columnIndex
              createdAt
              updatedAt
              owner
              editors
            }
            nextToken
          }
        }
        nextToken
      }
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
      members
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
          editors
          visibility
          isTemplate
          createdAt
          updatedAt
          columns {
            items {
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
                owner
                ticketIndex
              }
              columnIndex
              createdAt
              updatedAt
              owner
              editors
            }
            nextToken
          }
        }
        nextToken
      }
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
      members
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
          editors
          visibility
          isTemplate
          createdAt
          updatedAt
          columns {
            items {
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
                owner
                ticketIndex
              }
              columnIndex
              createdAt
              updatedAt
              owner
              editors
            }
            nextToken
          }
        }
        nextToken
      }
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
      owner
      editors
      visibility
      isTemplate
      createdAt
      updatedAt
      columns {
        items {
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
            owner
            ticketIndex
          }
          columnIndex
          createdAt
          updatedAt
          owner
          editors
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
      workspaceId
      name
      description
      owner
      editors
      visibility
      isTemplate
      createdAt
      updatedAt
      columns {
        items {
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
            owner
            ticketIndex
          }
          columnIndex
          createdAt
          updatedAt
          owner
          editors
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
      workspaceId
      name
      description
      owner
      editors
      visibility
      isTemplate
      createdAt
      updatedAt
      columns {
        items {
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
            owner
            ticketIndex
          }
          columnIndex
          createdAt
          updatedAt
          owner
          editors
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
      tickets {
        id
        columnId
        title
        description
        labels {
          name
          color
        }
        owner
        ticketIndex
      }
      columnIndex
      createdAt
      updatedAt
      owner
      editors
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
      tickets {
        id
        columnId
        title
        description
        labels {
          name
          color
        }
        owner
        ticketIndex
      }
      columnIndex
      createdAt
      updatedAt
      owner
      editors
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
      tickets {
        id
        columnId
        title
        description
        labels {
          name
          color
        }
        owner
        ticketIndex
      }
      columnIndex
      createdAt
      updatedAt
      owner
      editors
    }
  }
`;
