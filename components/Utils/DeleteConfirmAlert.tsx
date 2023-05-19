import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";

export const openModal = (onDelete: () => void, onCancel?: () => void) =>
  modals.openConfirmModal({
    title: "Delete your profile",
    centered: true,
    children: (
      <Text size="sm">
        Are you sure you want to delete your profile? This action is destructive
        and you will have to contact support to restore your data.
      </Text>
    ),
    labels: { confirm: "Delete recipe", cancel: "No don't delete it" },
    confirmProps: { color: "red" },
    onCancel: () => onCancel && onCancel(),
    onConfirm: () => onDelete(),
  });
