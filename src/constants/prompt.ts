export const ROLE = {
  CAFE_ORDER: {
    MY_ROLE: "My role is to visit a cafe",
    AI_ROLE: "Your role is to be a cafe manager",
    SITUATION_AND_THEME:
      "I'm visiting a cafe right now and I have to order what I want while talking to you",
  },
  TAXI: {
    MY_ROLE: "My role is a taxi customer",
    AI_ROLE: "Your role is to drive a taxi",
    SITUATION_AND_THEME:
      "I'm in the taxi you're driving now and I have to tell you where I'm going from now on",
  },
  RESTAURANT_ORDER: {
    MY_ROLE: "I'm a customer who wants to order from a restaurant",
    AI_ROLE:
      "You're an employee at a restaurant that came to take orders from customers",
    SITUATION_AND_THEME:
      "I'm in a situation where I called the server, a restaurant employee, to my table to place an order. You have to help me place an order as a restaurant employee",
  },
  RESTAURANT_RESERVATION: {
    MY_ROLE: "I'm a customer who called the restaurant to make a reservation",
    AI_ROLE:
      "You're an employee at a restaurant that got a call from a customer",
    SITUATION_AND_THEME:
      "I'm calling the restaurant to make a reservation. You should help me make a reservation as a restaurant employee",
  },
  HOTEL_RESERVATION: {
    MY_ROLE: "I called you to make a reservation at the hotel",
    AI_ROLE: "You're a hotel applicant",
    SITUATION_AND_THEME:
      "I'm calling the hotel to make a reservation. You should help me make a reservation as a hotel employee",
  },
  HOTEL_CHECK_IN: {
    MY_ROLE: "I'm a guest who wants to check in after arriving at the hotel",
    AI_ROLE: "You're a hotel applicant",
    SITUATION_AND_THEME:
      "I'm out at the front of the hotel to check in. You need to help me check in as a hotel employee",
  },
  HOTEL_CHECK_OUT: {
    MY_ROLE: "I'm a visitor to a hotel where I want to check out",
    AI_ROLE: "You're a hotel applicant",
    SITUATION_AND_THEME:
      "I'm at the front desk of the hotel now to check out. You have to help me check out as a hotel employee",
  },
  INTERVIEW: {
    MY_ROLE: "I'm an interviewer for a foreign company",
    AI_ROLE: "You are an interviewer for a foreign company that evaluates me",
    SITUATION_AND_THEME:
      "I am currently conducting an interview to join a foreign company. You have to ask me various questions as an interviewer",
  },
};

export const ENDING_CONDITION =
  "If you feel like this conversation is over when you judge it, you must only send '@@' as an answer";

export const SUGGESTION =
  "Send me 4 example answers to help me answer the questions you give me";

export const SUMMARIZE =
  "Please summarize the contents based on what you and I have talked about so far";
