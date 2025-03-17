// Path: routes/ApisStorage.k8s.ioV1Volumeattachments{name}StatusRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { readStorageV1VolumeAttachmentStatus } from '../controllers/StorageV1Controller'
import { patchStorageV1VolumeAttachmentStatus } from '../controllers/StorageV1Controller'
import { replaceStorageV1VolumeAttachmentStatus } from '../controllers/StorageV1Controller'

import {router} from './router';

router.get('/apis/storage.k8s.io/v1/volumeattachments/:name/status', readStorageV1VolumeAttachmentStatus)

router.patch('/apis/storage.k8s.io/v1/volumeattachments/:name/status', patchStorageV1VolumeAttachmentStatus)

router.put('/apis/storage.k8s.io/v1/volumeattachments/:name/status', replaceStorageV1VolumeAttachmentStatus)

export default router;
