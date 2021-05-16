/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = /* GraphQL */ `
  subscription OnCreateWorkspace($owner: String!) {
    onCreateWorkspace(owner: $owner) {
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
          image
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
export const onUpdateWorkspace = /* GraphQL */ `
  subscription OnUpdateWorkspace($owner: String!) {
    onUpdateWorkspace(owner: $owner) {
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
          image
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
export const onDeleteWorkspace = /* GraphQL */ `
  subscription OnDeleteWorkspace($owner: String!) {
    onDeleteWorkspace(owner: $owner) {
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
          image
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
export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard($owner: String!) {
    onCreateBoard(owner: $owner) {
      id
      workspaceId
      name
      description
      owner
      visibility
      isTemplate
      image
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($owner: String!) {
    onUpdateBoard(owner: $owner) {
      id
      workspaceId
      name
      description
      owner
      visibility
      isTemplate
      image
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($owner: String!) {
    onDeleteBoard(owner: $owner) {
      id
      workspaceId
      name
      description
      owner
      visibility
      isTemplate
      image
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
export const onCreateColumn = /* GraphQL */ `
  subscription OnCreateColumn($owner: String!) {
    onCreateColumn(owner: $owner) {
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
export const onUpdateColumn = /* GraphQL */ `
  subscription OnUpdateColumn($owner: String!) {
    onUpdateColumn(owner: $owner) {
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
export const onDeleteColumn = /* GraphQL */ `
  subscription OnDeleteColumn($owner: String!) {
    onDeleteColumn(owner: $owner) {
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
