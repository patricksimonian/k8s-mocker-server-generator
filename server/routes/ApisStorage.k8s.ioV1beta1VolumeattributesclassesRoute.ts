// Path: routes/ApisStorage.k8s.ioV1beta1VolumeattributesclassesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteStorageV1beta1CollectionVolumeAttributesClass } from '../controllers/StorageV1beta1Controller'
import { listStorageV1beta1VolumeAttributesClass } from '../controllers/StorageV1beta1Controller'
import { createStorageV1beta1VolumeAttributesClass } from '../controllers/StorageV1beta1Controller'

import {router} from './router';

router.delete('/apis/storage.k8s.io/v1beta1/volumeattributesclasses', deleteStorageV1beta1CollectionVolumeAttributesClass)

router.get('/apis/storage.k8s.io/v1beta1/volumeattributesclasses', listStorageV1beta1VolumeAttributesClass)

router.post('/apis/storage.k8s.io/v1beta1/volumeattributesclasses', createStorageV1beta1VolumeAttributesClass)

export default router;
