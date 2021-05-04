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
      createdAt
      updatedAt
      owner
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
  }
`;
export const onUpdateWorkspace = /* GraphQL */ `
  subscription OnUpdateWorkspace($owner: String!, $members: String!) {
    onUpdateWorkspace(owner: $owner, members: $members) {
      id
      name
      description
      members
      createdAt
      updatedAt
      owner
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
  }
`;
export const onDeleteWorkspace = /* GraphQL */ `
  subscription OnDeleteWorkspace($owner: String!, $members: String!) {
    onDeleteWorkspace(owner: $owner, members: $members) {
      id
      name
      description
      members
      createdAt
      updatedAt
      owner
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
export const onCreateColumn = /* GraphQL */ `
  subscription OnCreateColumn($owner: String!) {
    onCreateColumn(owner: $owner) {
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
export const onUpdateColumn = /* GraphQL */ `
  subscription OnUpdateColumn($owner: String!) {
    onUpdateColumn(owner: $owner) {
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
export const onDeleteColumn = /* GraphQL */ `
  subscription OnDeleteColumn($owner: String!) {
    onDeleteColumn(owner: $owner) {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket($owner: String!) {
    onCreateTicket(owner: $owner) {
      id
      columnId
      title
      description
      labels {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket($owner: String!) {
    onUpdateTicket(owner: $owner) {
      id
      columnId
      title
      description
      labels {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket($owner: String!) {
    onDeleteTicket(owner: $owner) {
      id
      columnId
      title
      description
      labels {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
    onCreateComment(owner: $owner) {
      id
      ticketId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
    onUpdateComment(owner: $owner) {
      id
      ticketId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
    onDeleteComment(owner: $owner) {
      id
      ticketId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;