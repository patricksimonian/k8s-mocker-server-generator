// Path: routes/ApisStorage.k8s.ioV1WatchVolumeattachments{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchStorageV1VolumeAttachment } from '../controllers/StorageV1Controller'

import {router} from './router';

router.get('/apis/storage.k8s.io/v1/watch/volumeattachments/:name', watchStorageV1VolumeAttachment)

export default router;
