/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBoardInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  owner?: string | null,
  editors?: Array< string | null > | null,
};

export type ModelBoardConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
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

export type Board = {
  __typename: "Board",
  id?: string,
  name?: string,
  description?: string | null,
  owner?: string | null,
  editors?: Array< string | null > | null,
  createdAt?: string,
  updatedAt?: string,
  columns?: ModelColumnConnection,
};

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
  owner?: string | null,
  createdAt?: string,
  updatedAt?: string,
  tickets?: ModelTicketConnection,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items?:  Array<Ticket | null > | null,
  nextToken?: string | null,
};

export type Ticket = {
  __typename: "Ticket",
  id?: string,
  columnId?: string,
  title?: string,
  description?: string | null,
  labels?:  Array<Label | null > | null,
  owner?: string | null,
  createdAt?: string,
  updatedAt?: string,
  comments?: ModelCommentConnection,
};

export type Label = {
  __typename: "Label",
  id?: string,
  name?: string,
  color?: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id?: string,
  ticketId?: string,
  content?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateBoardInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  owner?: string | null,
  editors?: Array< string | null > | null,
};

export type DeleteBoardInput = {
  id?: string | null,
};

export type CreateColumnInput = {
  id?: string | null,
  boardId: string,
  name: string,
  owner?: string | null,
};

export type ModelColumnConditionInput = {
  boardId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelColumnConditionInput | null > | null,
  or?: Array< ModelColumnConditionInput | null > | null,
  not?: ModelColumnConditionInput | null,
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

export type UpdateColumnInput = {
  id: string,
  boardId?: string | null,
  name?: string | null,
  owner?: string | null,
};

export type DeleteColumnInput = {
  id?: string | null,
};

export type CreateTicketInput = {
  id?: string | null,
  columnId: string,
  title: string,
  description?: string | null,
  labels?: Array< LabelInput | null > | null,
  owner?: string | null,
};

export type LabelInput = {
  id: string,
  name: string,
  color: string,
};

export type ModelTicketConditionInput = {
  columnId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTicketConditionInput | null > | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  not?: ModelTicketConditionInput | null,
};

export type UpdateTicketInput = {
  id: string,
  columnId?: string | null,
  title?: string | null,
  description?: string | null,
  labels?: Array< LabelInput | null > | null,
  owner?: string | null,
};

export type DeleteTicketInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  ticketId: string,
  content: string,
};

export type ModelCommentConditionInput = {
  ticketId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  ticketId?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  editors?: ModelStringInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items?:  Array<Board | null > | null,
  nextToken?: string | null,
};

export type ModelColumnFilterInput = {
  id?: ModelIDInput | null,
  boardId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelColumnFilterInput | null > | null,
  or?: Array< ModelColumnFilterInput | null > | null,
  not?: ModelColumnFilterInput | null,
};

export type ModelTicketFilterInput = {
  id?: ModelIDInput | null,
  columnId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTicketFilterInput | null > | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  not?: ModelTicketFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  ticketId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateBoardMutationVariables = {
  input?: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              id: string,
              name: string,
              color: string,
            } | null > | null,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            comments?:  {
              __typename: "ModelCommentConnection",
              items?:  Array< {
                __typename: "Comment",
                id: string,
                ticketId: string,
                content: string,
                createdAt: string,
                updatedAt: string,
                owner?: string | null,
              } | null > | null,
              nextToken?: string | null,
            } | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
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
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              id: string,
              name: string,
              color: string,
            } | null > | null,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            comments?:  {
              __typename: "ModelCommentConnection",
              items?:  Array< {
                __typename: "Comment",
                id: string,
                ticketId: string,
                content: string,
                createdAt: string,
                updatedAt: string,
                owner?: string | null,
              } | null > | null,
              nextToken?: string | null,
            } | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
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
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              id: string,
              name: string,
              color: string,
            } | null > | null,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            comments?:  {
              __typename: "ModelCommentConnection",
              items?:  Array< {
                __typename: "Comment",
                id: string,
                ticketId: string,
                content: string,
                createdAt: string,
                updatedAt: string,
                owner?: string | null,
              } | null > | null,
              nextToken?: string | null,
            } | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
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
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          id: string,
          name: string,
          color: string,
        } | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          items?:  Array< {
            __typename: "Comment",
            id: string,
            ticketId: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
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
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          id: string,
          name: string,
          color: string,
        } | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          items?:  Array< {
            __typename: "Comment",
            id: string,
            ticketId: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
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
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          id: string,
          name: string,
          color: string,
        } | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          items?:  Array< {
            __typename: "Comment",
            id: string,
            ticketId: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateTicketMutationVariables = {
  input?: CreateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    id: string,
    columnId: string,
    title: string,
    description?: string | null,
    labels?:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      color: string,
    } | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ticketId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateTicketMutationVariables = {
  input?: UpdateTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    id: string,
    columnId: string,
    title: string,
    description?: string | null,
    labels?:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      color: string,
    } | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ticketId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteTicketMutationVariables = {
  input?: DeleteTicketInput,
  condition?: ModelTicketConditionInput | null,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    id: string,
    columnId: string,
    title: string,
    description?: string | null,
    labels?:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      color: string,
    } | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ticketId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    ticketId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    ticketId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    ticketId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id?: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              id: string,
              name: string,
              color: string,
            } | null > | null,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            comments?:  {
              __typename: "ModelCommentConnection",
              items?:  Array< {
                __typename: "Comment",
                id: string,
                ticketId: string,
                content: string,
                createdAt: string,
                updatedAt: string,
                owner?: string | null,
              } | null > | null,
              nextToken?: string | null,
            } | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
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
      name: string,
      description?: string | null,
      owner?: string | null,
      editors?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      columns?:  {
        __typename: "ModelColumnConnection",
        items?:  Array< {
          __typename: "Column",
          id: string,
          boardId: string,
          name: string,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          tickets?:  {
            __typename: "ModelTicketConnection",
            items?:  Array< {
              __typename: "Ticket",
              id: string,
              columnId: string,
              title: string,
              description?: string | null,
              labels?:  Array< {
                __typename: "Label",
                id: string,
                name: string,
                color: string,
              } | null > | null,
              owner?: string | null,
              createdAt: string,
              updatedAt: string,
              comments?:  {
                __typename: "ModelCommentConnection",
                items?:  Array< {
                  __typename: "Comment",
                  id: string,
                  ticketId: string,
                  content: string,
                  createdAt: string,
                  updatedAt: string,
                  owner?: string | null,
                } | null > | null,
                nextToken?: string | null,
              } | null,
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

export type GetColumnQueryVariables = {
  id?: string,
};

export type GetColumnQuery = {
  getColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          id: string,
          name: string,
          color: string,
        } | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          items?:  Array< {
            __typename: "Comment",
            id: string,
            ticketId: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
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
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      tickets?:  {
        __typename: "ModelTicketConnection",
        items?:  Array< {
          __typename: "Ticket",
          id: string,
          columnId: string,
          title: string,
          description?: string | null,
          labels?:  Array< {
            __typename: "Label",
            id: string,
            name: string,
            color: string,
          } | null > | null,
          owner?: string | null,
          createdAt: string,
          updatedAt: string,
          comments?:  {
            __typename: "ModelCommentConnection",
            items?:  Array< {
              __typename: "Comment",
              id: string,
              ticketId: string,
              content: string,
              createdAt: string,
              updatedAt: string,
              owner?: string | null,
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

export type GetTicketQueryVariables = {
  id?: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    id: string,
    columnId: string,
    title: string,
    description?: string | null,
    labels?:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      color: string,
    } | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ticketId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items?:  Array< {
      __typename: "Ticket",
      id: string,
      columnId: string,
      title: string,
      description?: string | null,
      labels?:  Array< {
        __typename: "Label",
        id: string,
        name: string,
        color: string,
      } | null > | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          ticketId: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    ticketId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      ticketId: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
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
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              id: string,
              name: string,
              color: string,
            } | null > | null,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            comments?:  {
              __typename: "ModelCommentConnection",
              items?:  Array< {
                __typename: "Comment",
                id: string,
                ticketId: string,
                content: string,
                createdAt: string,
                updatedAt: string,
                owner?: string | null,
              } | null > | null,
              nextToken?: string | null,
            } | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
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
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              id: string,
              name: string,
              color: string,
            } | null > | null,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            comments?:  {
              __typename: "ModelCommentConnection",
              items?:  Array< {
                __typename: "Comment",
                id: string,
                ticketId: string,
                content: string,
                createdAt: string,
                updatedAt: string,
                owner?: string | null,
              } | null > | null,
              nextToken?: string | null,
            } | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
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
    name: string,
    description?: string | null,
    owner?: string | null,
    editors?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    columns?:  {
      __typename: "ModelColumnConnection",
      items?:  Array< {
        __typename: "Column",
        id: string,
        boardId: string,
        name: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        tickets?:  {
          __typename: "ModelTicketConnection",
          items?:  Array< {
            __typename: "Ticket",
            id: string,
            columnId: string,
            title: string,
            description?: string | null,
            labels?:  Array< {
              __typename: "Label",
              id: string,
              name: string,
              color: string,
            } | null > | null,
            owner?: string | null,
            createdAt: string,
            updatedAt: string,
            comments?:  {
              __typename: "ModelCommentConnection",
              items?:  Array< {
                __typename: "Comment",
                id: string,
                ticketId: string,
                content: string,
                createdAt: string,
                updatedAt: string,
                owner?: string | null,
              } | null > | null,
              nextToken?: string | null,
            } | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateColumnSubscriptionVariables = {
  owner?: string,
};

export type OnCreateColumnSubscription = {
  onCreateColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          id: string,
          name: string,
          color: string,
        } | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          items?:  Array< {
            __typename: "Comment",
            id: string,
            ticketId: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateColumnSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateColumnSubscription = {
  onUpdateColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          id: string,
          name: string,
          color: string,
        } | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          items?:  Array< {
            __typename: "Comment",
            id: string,
            ticketId: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteColumnSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteColumnSubscription = {
  onDeleteColumn?:  {
    __typename: "Column",
    id: string,
    boardId: string,
    name: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    tickets?:  {
      __typename: "ModelTicketConnection",
      items?:  Array< {
        __typename: "Ticket",
        id: string,
        columnId: string,
        title: string,
        description?: string | null,
        labels?:  Array< {
          __typename: "Label",
          id: string,
          name: string,
          color: string,
        } | null > | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        comments?:  {
          __typename: "ModelCommentConnection",
          items?:  Array< {
            __typename: "Comment",
            id: string,
            ticketId: string,
            content: string,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null > | null,
          nextToken?: string | null,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  owner?: string,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    id: string,
    columnId: string,
    title: string,
    description?: string | null,
    labels?:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      color: string,
    } | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ticketId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    id: string,
    columnId: string,
    title: string,
    description?: string | null,
    labels?:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      color: string,
    } | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ticketId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    id: string,
    columnId: string,
    title: string,
    description?: string | null,
    labels?:  Array< {
      __typename: "Label",
      id: string,
      name: string,
      color: string,
    } | null > | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        ticketId: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    ticketId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    ticketId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    ticketId: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
