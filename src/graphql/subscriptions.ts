/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = /* GraphQL */ `
  subscription OnCreateWorkspace($owner: String!, $members: String!) {
    onCreateWorkspace(owner: $owner, members: $members) {
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
export const onUpdateWorkspace = /* GraphQL */ `
  subscription OnUpdateWorkspace($owner: String!, $members: String!) {
    onUpdateWorkspace(owner: $owner, members: $members) {
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
export const onDeleteWorkspace = /* GraphQL */ `
  subscription OnDeleteWorkspace($owner: String!, $members: String!) {
    onDeleteWorkspace(owner: $owner, members: $members) {
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
export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard($owner: String!, $editors: String!) {
    onCreateBoard(owner: $owner, editors: $editors) {
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($owner: String!, $editors: String!) {
    onUpdateBoard(owner: $owner, editors: $editors) {
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($owner: String!, $editors: String!) {
    onDeleteBoard(owner: $owner, editors: $editors) {
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
export const onCreateColumn = /* GraphQL */ `
  subscription OnCreateColumn($owner: String!, $editors: String!) {
    onCreateColumn(owner: $owner, editors: $editors) {
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
export const onUpdateColumn = /* GraphQL */ `
  subscription OnUpdateColumn($owner: String!, $editors: String!) {
    onUpdateColumn(owner: $owner, editors: $editors) {
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
export const onDeleteColumn = /* GraphQL */ `
  subscription OnDeleteColumn($owner: String!, $editors: String!) {
    onDeleteColumn(owner: $owner, editors: $editors) {
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
