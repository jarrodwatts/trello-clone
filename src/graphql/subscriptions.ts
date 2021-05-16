/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = /* GraphQL */ `
  subscription OnCreateWorkspace($owner: String!, $editors: String!) {
    onCreateWorkspace(owner: $owner, editors: $editors) {
      id
      name
      description
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
export const onUpdateWorkspace = /* GraphQL */ `
  subscription OnUpdateWorkspace($owner: String!, $editors: String!) {
    onUpdateWorkspace(owner: $owner, editors: $editors) {
      id
      name
      description
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
export const onDeleteWorkspace = /* GraphQL */ `
  subscription OnDeleteWorkspace($owner: String!, $editors: String!) {
    onDeleteWorkspace(owner: $owner, editors: $editors) {
      id
      name
      description
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
export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard($owner: String!, $editors: String!) {
    onCreateBoard(owner: $owner, editors: $editors) {
      id
      workspaceId
      name
      description
      columns {
        items {
          id
          owner
          boardId
          name
          columnIndex
          createdAt
          updatedAt
        }
        nextToken
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($owner: String!, $editors: String!) {
    onUpdateBoard(owner: $owner, editors: $editors) {
      id
      workspaceId
      name
      description
      columns {
        items {
          id
          owner
          boardId
          name
          columnIndex
          createdAt
          updatedAt
        }
        nextToken
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($owner: String!, $editors: String!) {
    onDeleteBoard(owner: $owner, editors: $editors) {
      id
      workspaceId
      name
      description
      columns {
        items {
          id
          owner
          boardId
          name
          columnIndex
          createdAt
          updatedAt
        }
        nextToken
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
