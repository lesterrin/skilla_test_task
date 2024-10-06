export type GetCallsListResultType = {
  results: CallType[]
  total_rows: number
}

export type CallType = {
  abuse: []
  candidate_id: number
  candidate_link: string
  candidate_name: string
  candidate_vacancy_name: string
  contact_company: string
  contact_name: string
  date: string
  date_notime: string
  disconnect_reason: string
  errors: string[]
  from_extension: string
  from_number: string
  from_site: number
  id: number
  in_out: number
  is_skilla: number
  line_name: string
  line_number: string
  partner_data: PartnerDataType
  partnership_id: string
  person_avatar: string
  person_id: number
  person_name: string
  person_surname: string
  record: string
  results: []
  source: string
  stages: []
  status: STATUS_VALUES
  time: 0
  to_extension: string
  to_number: string
}

export type PartnerDataType = { id: string; name: string; phone: string }

export type GetCallsListDataType = {
  date_start?: string
  date_end?: string
  order?: ORDER_TYPES
  sort_by?: SORT_BY_TYPE
  in_out: InOutParamsType
}

export type InOutParamsType = 0 | 1 | ""

export enum STATUS_VALUES {
  OUTGOING_CALL = "Дозвонился",
  BAD_OUTGOING_CALL = "Не дозвонился",
}

export enum SORT_BY_TYPE {
  DATE = "date",
  DURATION = "duration",
}

export enum ORDER_TYPES {
  ASC = "ASC",
  DESC = "DESC",
}
