/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkspaceInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  members?: Array< string | null > | null,
  owner?: string | null,
};

export type ModelWorkspaceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelWorkspaceConditionInput | null > | null,
  or?: Array< ModelWorkspaceConditionInput | null > | null,
  not?: ModelWorkspaceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Workspace = {
  __typename: "Workspace",
  id?: string,
  name?: string,
  description?: string | null,
  members?: Array< string | null > | null,
  owner?: string | null,
  createdAt?: string,
  updatedAt?: string,
  boards?: ModelBoardConnection,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items?:  Array<Board | null > | null,
  nextToken?: string | null,
};

export type Board = {
  __typename: "Board",
  id?: string,
  workspaceId?: string,
  name?: string,
  description?: string | null,
  owner?: string | null,
  editors?: Array< string > | null,
  visibility?: Visibility | null,
  isTemplate?: boolean | null,
  createdAt?: string,
  updatedAt?: string,
  columns?: ModelColumnConnection,
};

export enum Visibility {
  Public = "Public",
  Private = "Private",
  Workspace = "Workspace",
}


export type ModelColumnConnection = {
  __typename: "ModelColumnConnection",
  items?:  Array<Column | null > | null,
  nextToken?: string | null,
};

export type Column = {
  __typename: "Column",
  id?: string,
  boardId?: string,
  name?: string,
  tickets?:  Array<Ticket > | null,
  columnIndex?: number,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
  editors?: string | null,
};

export type Ticket = {
  __typename: "Ticket",
  id?: string,
  columnId?: string,
  title?: string,
  description?: string | null,
  labels?:  Array<Label > | null,
  owner?: string | null,
};

export type Label = {
  __typename: "Label",
  name?: string,
  color?: string,
};

export type UpdateWorkspaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  members?: Array< string | null > | null,
  owner?: string | null,
};

export type DeleteWorkspaceInput = {
  id?: string | null,
};

export type CreateBoardInput = {
  id?: string | null,
  workspaceId: string,
  name: string,
  description?: string | null,
  owner?: string | null,
  editors?: Array< string > | null,
  visibility?: Visibility | null,
  isTemplate?: boolean | null,
};

export type ModelBoardConditionInput = {
  workspaceId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  visibility?: ModelVisibilityInput | null,
  isTemplate?: ModelBooleanInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelVisibilityInput = {
  eq?: Visibility | null,
  ne?: Visibility | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBoardInput = {
  id: string,
  workspaceId?: string | null,
  name?: string | null,
  description?: string | null,
  owner?: string | null,
  editors?: Array< string > | null,
  visibility?: Visibility | null,
  isTemplate?: boolean | null,
};

export type DeleteBoardInput = {
  id?: string | null,
};

export type CreateColumnInput = {
  id?: string | null,
  boardId: string,
  name: string,
  tickets?: Array< TicketInput > | null,
  columnIndex: number,
};

export type TicketInput = {
  id: string,
  columnId: string,
  title: string,
  description?: string | null,
  labels?: Array< LabelInput > | null,
  owner?: string | null,
};

export type LabelInput = {
  name: string,
  color: string,
};

export type ModelColumnConditionInput = {
  boardId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  columnIndex?: ModelIntInput | null,
  and?: Array< ModelColumnConditionInput | null > | null,
  or?: Array< ModelColumnConditionInput | null > | null,
  not?: ModelColumnConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateColumnInput = {
  id: string,
  boardId?: string | null,
  name?: string | null,
  tickets?: Array< TicketInput > | null,
  columnIndex?: number | null,
};

export type DeleteColumnInput = {
  id?: string | null,
};

export type ModelWorkspaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  members?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWorkspaceFilterInput | null > | null,
  or?: Array< ModelWorkspaceFilterInput | null > | null,
  not?: ModelWorkspaceFilterInput | null,
};

export type ModelWorkspaceConnection = {
  __typename: "ModelWorkspaceConnection",
  items?:  Array<Workspace | null > | null,
  nextToken?: string | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  workspaceId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  editors?: ModelStringInput | null,
  visibility?: ModelVisibilityInput | null,
  isTemplate?: ModelBooleanInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelColumnFilterInput = {
  id?: ModelIDInput | null,
  boardId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  columnIndex?: ModelIntInput | null,
  and?: Array< ModelColumnFilterInput | null > | null,
  or?: Array< ModelColumnFilterInput | null > | null,
  not?: ModelColumnFilterInput | null,
};

export type CreateWorkspaceMutationVariables = {
  input?: CreateWorkspaceInput,
  condition?: ModelWorkspaceConditionInput | null,
};

export type CreateWorkspaceMutation = {
  createWorkspace?:  {
    __typename: "Workspace",
    id: string,
    name: string,
    description?: string | null,
    members?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    boards?:  {
      __typename: "ModelBoardConnection",
      items?:  Array< {
        __typename: "Board",
        id: string,
        workspaceId: string,
        name: string,
        description?: string | null,
        owner?: string | null,
        editors?: Array< string > | null,
        visibility?: Visibility | null,
        isTemplate?: boolean | null,
        createdAt: string,
        updatedAt: string,
        columns?:  {
          __typename: "ModelColumnConnection",
          items?:  Array< {
            __typename: "Column",
            id: string,
            boardId: string,
            name: string,
            tickets?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                name: string,
                color: string,
              } > | null,
              owner?: string | null,
            } > | null,
            columnIndex: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
            editors?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateWorkspaceMutationVariables = {
  input?: UpdateWorkspaceInput,
  condition?: ModelWorkspaceConditionInput | null,
};

export type UpdateWorkspaceMutation = {
  updateWorkspace?:  {
    __typename: "Workspace",
    id: string,
    name: string,
    description?: string | null,
    members?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    boards?:  {
      __typename: "ModelBoardConnection",
      items?:  Array< {
        __typename: "Board",
        id: string,
        workspaceId: string,
        name: string,
        description?: string | null,
        owner?: string | null,
        editors?: Array< string > | null,
        visibility?: Visibility | null,
        isTemplate?: boolean | null,
        createdAt: string,
        updatedAt: string,
        columns?:  {
          __typename: "ModelColumnConnection",
          items?:  Array< {
            __typename: "Column",
            id: string,
            boardId: string,
            name: string,
            tickets?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                name: string,
                color: string,
              } > | null,
              owner?: string | null,
            } > | null,
            columnIndex: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
            editors?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteWorkspaceMutationVariables = {
  input?: DeleteWorkspaceInput,
  condition?: ModelWorkspaceConditionInput | null,
};

export type DeleteWorkspaceMutation = {
  deleteWorkspace?:  {
    __typename: "Workspace",
    id: string,
    name: string,
    description?: string | null,
    members?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    boards?:  {
      __typename: "ModelBoardConnection",
      items?:  Array< {
        __typename: "Board",
        id: string,
        workspaceId: string,
        name: string,
        description?: string | null,
        owner?: string | null,
        editors?: Array< string > | null,
        visibility?: Visibility | null,
        isTemplate?: boolean | null,
        createdAt: string,
        updatedAt: string,
        columns?:  {
          __typename: "ModelColumnConnection",
          items?:  Array< {
            __typename: "Column",
            id: string,
            boardId: string,
            name: string,
            tickets?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                name: string,
                color: string,
              } > | null,
              owner?: string | null,
            } > | null,
            columnIndex: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
            editors?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateBoardMutationVariables = {
  input?: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    workspaceId: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string > | null,
    visibility?: Visibility | null,
    isTemplate?: boolean | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        tickets?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            name: string,
            color: string,
          } > | null,
          owner?: string | null,
        } > | null,
        columnIndex: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input?: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard?:  {
    __typename: "Board",
    id: string,
    workspaceId: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string > | null,
    visibility?: Visibility | null,
    isTemplate?: boolean | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        tickets?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            name: string,
            color: string,
          } > | null,
          owner?: string | null,
        } > | null,
        columnIndex: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input?: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard?:  {
    __typename: "Board",
    id: string,
    workspaceId: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string > | null,
    visibility?: Visibility | null,
    isTemplate?: boolean | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        tickets?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            name: string,
            color: string,
          } > | null,
          owner?: string | null,
        } > | null,
        columnIndex: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateColumnMutationVariables = {
  input?: CreateColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type CreateColumnMutation = {
  createColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    tickets?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        name: string,
        color: string,
      } > | null,
      owner?: string | null,
    } > | null,
    columnIndex: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    editors?: string | null,
  } | null,
};

export type UpdateColumnMutationVariables = {
  input?: UpdateColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type UpdateColumnMutation = {
  updateColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    tickets?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        name: string,
        color: string,
      } > | null,
      owner?: string | null,
    } > | null,
    columnIndex: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    editors?: string | null,
  } | null,
};

export type DeleteColumnMutationVariables = {
  input?: DeleteColumnInput,
  condition?: ModelColumnConditionInput | null,
};

export type DeleteColumnMutation = {
  deleteColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    tickets?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        name: string,
        color: string,
      } > | null,
      owner?: string | null,
    } > | null,
    columnIndex: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    editors?: string | null,
  } | null,
};

export type GetWorkspaceQueryVariables = {
  id?: string,
};

export type GetWorkspaceQuery = {
  getWorkspace?:  {
    __typename: "Workspace",
    id: string,
    name: string,
    description?: string | null,
    members?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    boards?:  {
      __typename: "ModelBoardConnection",
      items?:  Array< {
        __typename: "Board",
        id: string,
        workspaceId: string,
        name: string,
        description?: string | null,
        owner?: string | null,
        editors?: Array< string > | null,
        visibility?: Visibility | null,
        isTemplate?: boolean | null,
        createdAt: string,
        updatedAt: string,
        columns?:  {
          __typename: "ModelColumnConnection",
          items?:  Array< {
            __typename: "Column",
            id: string,
            boardId: string,
            name: string,
            tickets?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                name: string,
                color: string,
              } > | null,
              owner?: string | null,
            } > | null,
            columnIndex: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
            editors?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListWorkspacesQueryVariables = {
  filter?: ModelWorkspaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkspacesQuery = {
  listWorkspaces?:  {
    __typename: "ModelWorkspaceConnection",
    items?:  Array< {
      __typename: "Workspace",
      id: string,
      name: string,
      description?: string | null,
      members?: Array< string | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      boards?:  {
        __typename: "ModelBoardConnection",
        items?:  Array< {
          __typename: "Board",
          id: string,
          workspaceId: string,
          name: string,
          description?: string | null,
          owner?: string | null,
          editors?: Array< string > | null,
          visibility?: Visibility | null,
          isTemplate?: boolean | null,
          createdAt: string,
          updatedAt: string,
          columns?:  {
            __typename: "ModelColumnConnection",
            items?:  Array< {
              __typename: "Column",
              id: string,
              boardId: string,
              name: string,
              tickets?:  Array< {
                __typename: "Ticket",
                id: string,
                columnId: string,
                title: string,
                description?: string | null,
                labels?:  Array< {
                  __typename: "Label",
                  name: string,
                  color: string,
                } > | null,
                owner?: string | null,
              } > | null,
              columnIndex: number,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
              editors?: string | null,
            } | null > | null,
            nextToken?: string | null,
          } | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id?: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    workspaceId: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string > | null,
    visibility?: Visibility | null,
    isTemplate?: boolean | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        tickets?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            name: string,
            color: string,
          } > | null,
          owner?: string | null,
        } > | null,
        columnIndex: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards?:  {
    __typename: "ModelBoardConnection",
    items?:  Array< {
      __typename: "Board",
      id: string,
      workspaceId: string,
      name: string,
      description?: string | null,
      owner?: string | null,
      editors?: Array< string > | null,
      visibility?: Visibility | null,
      isTemplate?: boolean | null,
      createdAt: string,
      updatedAt: string,
      columns?:  {
        __typename: "ModelColumnConnection",
        items?:  Array< {
          __typename: "Column",
          id: string,
          boardId: string,
          name: string,
          tickets?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              name: string,
              color: string,
            } > | null,
            owner?: string | null,
          } > | null,
          columnIndex: number,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
          editors?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetColumnQueryVariables = {
  id?: string,
};

export type GetColumnQuery = {
  getColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    tickets?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        name: string,
        color: string,
      } > | null,
      owner?: string | null,
    } > | null,
    columnIndex: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    editors?: string | null,
  } | null,
};

export type ListColumnsQueryVariables = {
  filter?: ModelColumnFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColumnsQuery = {
  listColumns?:  {
    __typename: "ModelColumnConnection",
    items?:  Array< {
      __typename: "Column",
      id: string,
      boardId: string,
      name: string,
      tickets?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          name: string,
          color: string,
        } > | null,
        owner?: string | null,
      } > | null,
      columnIndex: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      editors?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWorkspaceSubscriptionVariables = {
  owner?: string,
  members?: string,
};

export type OnCreateWorkspaceSubscription = {
  onCreateWorkspace?:  {
    __typename: "Workspace",
    id: string,
    name: string,
    description?: string | null,
    members?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    boards?:  {
      __typename: "ModelBoardConnection",
      items?:  Array< {
        __typename: "Board",
        id: string,
        workspaceId: string,
        name: string,
        description?: string | null,
        owner?: string | null,
        editors?: Array< string > | null,
        visibility?: Visibility | null,
        isTemplate?: boolean | null,
        createdAt: string,
        updatedAt: string,
        columns?:  {
          __typename: "ModelColumnConnection",
          items?:  Array< {
            __typename: "Column",
            id: string,
            boardId: string,
            name: string,
            tickets?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                name: string,
                color: string,
              } > | null,
              owner?: string | null,
            } > | null,
            columnIndex: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
            editors?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateWorkspaceSubscriptionVariables = {
  owner?: string,
  members?: string,
};

export type OnUpdateWorkspaceSubscription = {
  onUpdateWorkspace?:  {
    __typename: "Workspace",
    id: string,
    name: string,
    description?: string | null,
    members?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    boards?:  {
      __typename: "ModelBoardConnection",
      items?:  Array< {
        __typename: "Board",
        id: string,
        workspaceId: string,
        name: string,
        description?: string | null,
        owner?: string | null,
        editors?: Array< string > | null,
        visibility?: Visibility | null,
        isTemplate?: boolean | null,
        createdAt: string,
        updatedAt: string,
        columns?:  {
          __typename: "ModelColumnConnection",
          items?:  Array< {
            __typename: "Column",
            id: string,
            boardId: string,
            name: string,
            tickets?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                name: string,
                color: string,
              } > | null,
              owner?: string | null,
            } > | null,
            columnIndex: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
            editors?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteWorkspaceSubscriptionVariables = {
  owner?: string,
  members?: string,
};

export type OnDeleteWorkspaceSubscription = {
  onDeleteWorkspace?:  {
    __typename: "Workspace",
    id: string,
    name: string,
    description?: string | null,
    members?: Array< string | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    boards?:  {
      __typename: "ModelBoardConnection",
      items?:  Array< {
        __typename: "Board",
        id: string,
        workspaceId: string,
        name: string,
        description?: string | null,
        owner?: string | null,
        editors?: Array< string > | null,
        visibility?: Visibility | null,
        isTemplate?: boolean | null,
        createdAt: string,
        updatedAt: string,
        columns?:  {
          __typename: "ModelColumnConnection",
          items?:  Array< {
            __typename: "Column",
            id: string,
            boardId: string,
            name: string,
            tickets?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                name: string,
                color: string,
              } > | null,
              owner?: string | null,
            } > | null,
            columnIndex: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
            editors?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateBoardSubscriptionVariables = {
  owner?: string,
  editors?: string,
};

export type OnCreateBoardSubscription = {
  onCreateBoard?:  {
    __typename: "Board",
    id: string,
    workspaceId: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string > | null,
    visibility?: Visibility | null,
    isTemplate?: boolean | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        tickets?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            name: string,
            color: string,
          } > | null,
          owner?: string | null,
        } > | null,
        columnIndex: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateBoardSubscriptionVariables = {
  owner?: string,
  editors?: string,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard?:  {
    __typename: "Board",
    id: string,
    workspaceId: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string > | null,
    visibility?: Visibility | null,
    isTemplate?: boolean | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        tickets?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            name: string,
            color: string,
          } > | null,
          owner?: string | null,
        } > | null,
        columnIndex: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteBoardSubscriptionVariables = {
  owner?: string,
  editors?: string,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard?:  {
    __typename: "Board",
    id: string,
    workspaceId: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string > | null,
    visibility?: Visibility | null,
    isTemplate?: boolean | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        tickets?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            name: string,
            color: string,
          } > | null,
          owner?: string | null,
        } > | null,
        columnIndex: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        editors?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateColumnSubscriptionVariables = {
  owner?: string,
  editors?: string,
};

export type OnCreateColumnSubscription = {
  onCreateColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    tickets?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        name: string,
        color: string,
      } > | null,
      owner?: string | null,
    } > | null,
    columnIndex: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    editors?: string | null,
  } | null,
};

export type OnUpdateColumnSubscriptionVariables = {
  owner?: string,
  editors?: string,
};

export type OnUpdateColumnSubscription = {
  onUpdateColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    tickets?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        name: string,
        color: string,
      } > | null,
      owner?: string | null,
    } > | null,
    columnIndex: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    editors?: string | null,
  } | null,
};

export type OnDeleteColumnSubscriptionVariables = {
  owner?: string,
  editors?: string,
};

export type OnDeleteColumnSubscription = {
  onDeleteColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    tickets?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        name: string,
        color: string,
      } > | null,
      owner?: string | null,
    } > | null,
    columnIndex: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    editors?: string | null,
  } | null,
};
