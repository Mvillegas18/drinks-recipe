import { StateCreator } from 'zustand';

export type Notification = {
	text: string;
	error: boolean;
	show: boolean;
};

export type NotificationSliceType = {
	notification: Notification;
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (
	set
) => ({
	notification: {
		text: '',
		error: false,
		show: false,
	},
});
