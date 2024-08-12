// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { MemoryRouter } from "react-router-dom";
// import { GameHostForm } from "../../src/components/ui/forms/GameHostForm";

// const queryClient = new QueryClient();

// describe("Checks if UI is rendered correctly in the Game Host Form", () => {
//   beforeEach(() => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <MemoryRouter>
//           <GameHostForm />
//         </MemoryRouter>
//       </QueryClientProvider>
//     );
//   });

//   it("should render all input components when page is loaded", () => {
//     const title = screen.getByTestId("title-input");
//     const start_datetime = screen.getByTestId("start-datetime-input");
//     const end_datetime = screen.getByTestId("end-datetime-input");
//     const address = screen.getByTestId("address-input");
//     const address_detail = screen.getByTestId("address-detail-input");
//     const court_name = screen.getByTestId("court-name-input");
//     const min_participants = screen.getByTestId("min-participants-input");
//     const max_participants = screen.getByTestId("max-participants-input");
//     const fee = screen.getByTestId("fee-input");
//     const description = screen.getByTestId("description-input");

//     expect(title).toBeInTheDocument();
//     expect(start_datetime).toBeInTheDocument();
//     expect(end_datetime).toBeInTheDocument();
//     expect(address).toBeInTheDocument();
//     expect(address_detail).toBeInTheDocument();
//     expect(court_name).toBeInTheDocument();
//     expect(min_participants).toBeInTheDocument();
//     expect(max_participants).toBeInTheDocument();
//     expect(fee).toBeInTheDocument();
//     expect(description).toBeInTheDocument();
//   });

//   it("should render a submit button", () => {
//     const submitButton = screen.getByText("매치 생성하기");
//     expect(submitButton).toBeInTheDocument();
//   });

//   it("sholud render find address button", () => {
//     const findAddressBtn = screen.getByTestId("submit-button");
//     expect(findAddressBtn).toBeInTheDocument();
//   });
// });

// describe("Checks form validation ", () => {
//   beforeEach(() => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <MemoryRouter>
//           <GameHostForm />
//         </MemoryRouter>
//       </QueryClientProvider>
//     );
//   });

//   it("should render a disabled button when form is not completed", async () => {
//     const title = screen.getByTestId("title-input");
//     const start_datetime = screen.getByTestId("start-datetime-input");
//     const end_datetime = screen.getByTestId("end-datetime-input");
//     const address = screen.getByTestId("address-input");
//     const address_detail = screen.getByTestId("address-detail-input");
//     const court_name = screen.getByTestId("court-name-input");
//     const min_participants = screen.getByTestId("min-participants-input");
//     const max_participants = screen.getByTestId("max-participants-input");
//     const fee = screen.getByTestId("fee-input");
//     const description = screen.getByTestId("description-input");
//     const submitButton = screen.getByTestId("submit-button");

//     fireEvent.change(title, { target: { value: "" } });
//     fireEvent.change(start_datetime, {
//       target: { value: "" },
//     });
//     fireEvent.change(end_datetime, {
//       target: { value: "" },
//     });
//     fireEvent.change(address, {
//       target: {
//         value: "경기 오산시 부산중앙로 11 (부산동, 오산시티자이 1단지)",
//       },
//     });
//     fireEvent.change(address_detail, {
//       target: { value: "" },
//     });
//     fireEvent.change(court_name, { target: { value: "" } });
//     fireEvent.change(min_participants, { target: { value: 5 } });
//     fireEvent.change(max_participants, { target: { value: 10 } });
//     fireEvent.change(fee, { target: { value: "5000" } });
//     fireEvent.change(description, { target: { value: "test" } });

//     await waitFor(() => expect(submitButton).toBeInTheDocument());
//     await waitFor(() => expect(submitButton).toBeDisabled());
//   });

//   it("should display error message if max participants is less than min participants", () => {
//     const minParticipantsInput = screen.getByTestId("min-participants-input");
//     const maxParticipantsInput = screen.getByTestId("max-participants-input");

//     fireEvent.change(minParticipantsInput, { target: { value: 10 } });
//     fireEvent.change(maxParticipantsInput, { target: { value: 5 } });

//     const errorMessage = screen.getByText(
//       "총 모집 인원은 최소 모집 인원보다 많아야해요."
//     );
//     expect(errorMessage).toBeInTheDocument();
//   });

//   it("should not display error message if max participants is greater than or equal to min participants", () => {
//     const minParticipantsInput = screen.getByTestId("min-participants-input");
//     const maxParticipantsInput = screen.getByTestId("max-participants-input");

//     fireEvent.change(minParticipantsInput, { target: { value: 10 } });
//     fireEvent.change(maxParticipantsInput, { target: { value: 10 } });

//     const errorMessage = screen.queryByText(
//       "총 모집 인원은 최소 모집 인원보다 많아야해요."
//     );
//     expect(errorMessage).not.toBeInTheDocument();
//   });
//   it("should enable submit button when form is valid", async () => {
//     const titleInput = screen.getByTestId("title-input");
//     const startDatetimeInput = screen.getByTestId("start-datetime-input");
//     const endDatetimeInput = screen.getByTestId("end-datetime-input");
//     const addressInput = screen.getByTestId("address-input");
//     const addressDetailInput = screen.getByTestId("address-detail-input");
//     const courtNameInput = screen.getByTestId("court-name-input");
//     const minParticipantsInput = screen.getByTestId("min-participants-input");
//     const maxParticipantsInput = screen.getByTestId("max-participants-input");
//     const feeInput = screen.getByTestId("fee-input");
//     const descriptionTextArea = screen.getByTestId("description-input");

//     fireEvent.change(titleInput, { target: { value: "MITI Test Game" } });
//     fireEvent.change(startDatetimeInput, {
//       target: { value: "2024-06-30T10:00" },
//     });
//     fireEvent.change(endDatetimeInput, {
//       target: { value: "2024-06-30T12:00" },
//     });
//     fireEvent.change(addressInput, {
//       target: {
//         value: "경기 오산시 부산중앙로 11 (부산동, 오산시티자이 1단지)",
//       },
//     });
//     fireEvent.change(addressDetailInput, {
//       target: { value: "Building A 401" },
//     });
//     fireEvent.change(courtNameInput, { target: { value: "MITI Court" } });
//     fireEvent.change(minParticipantsInput, { target: { value: 5 } });
//     fireEvent.change(maxParticipantsInput, { target: { value: 10 } });
//     fireEvent.change(feeInput, { target: { value: "5000" } });
//     fireEvent.change(descriptionTextArea, { target: { value: "test" } });

//     const submitButton = screen.getByTestId("submit-button");

//     await waitFor(() => expect(submitButton).toBeInTheDocument());
//     await waitFor(() => expect(submitButton).toBeEnabled());
//   });
// });
