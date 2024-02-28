import { useMutation } from "@tanstack/react-query";
import {
  cancelParticipationStatus,
  updateParticipationStatus,
} from "../api/participants";

export const useConfirmParticipantMutation = (gameId: number) => {
  return useMutation({
    mutationFn: (userId: number | null) =>
      updateParticipationStatus(gameId, userId),
  });
};

export const useRejectParticipantMutation = (gameId: number) => {
  return useMutation({
    mutationFn: (userId: number | null) =>
      cancelParticipationStatus(gameId, userId),
  });
};
