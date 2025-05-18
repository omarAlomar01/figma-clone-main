import { LiveMap, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  throttle: 16,
  publicApiKey: "pk_dev_uwNTl_fxPDOO5eF8uLCfpgFJcUgbnawc91QkPJH9uwsFuN6cU3Gz5bjiyiHS3do0",
});

type Presence = {};

type Storage = {
  canvasObjects: LiveMap<string, any>;
};

type UserMeta = {};

type RoomEvent = {};

export type ThreadMetadata = {
  resolved: boolean;
  zIndex: number;
  time?: number;
  x: number;
  y: number;
};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client,
  {
    async resolveUsers({ userIds }) {
      return [];
    },
    async resolveMentionSuggestions({ text, roomId }) {
      return [];
    },
  }
);
