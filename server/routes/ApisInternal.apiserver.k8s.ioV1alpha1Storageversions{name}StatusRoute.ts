// Path: routes/ApisInternal.apiserver.k8s.ioV1alpha1Storageversions{name}StatusRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { readInternalApiserverV1alpha1StorageVersionStatus } from '../controllers/InternalApiserverV1alpha1Controller'
import { patchInternalApiserverV1alpha1StorageVersionStatus } from '../controllers/InternalApiserverV1alpha1Controller'
import { replaceInternalApiserverV1alpha1StorageVersionStatus } from '../controllers/InternalApiserverV1alpha1Controller'

import {router} from './router';

router.get('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/:name/status', readInternalApiserverV1alpha1StorageVersionStatus)

router.patch('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/:name/status', patchInternalApiserverV1alpha1StorageVersionStatus)

router.put('/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/:name/status', replaceInternalApiserverV1alpha1StorageVersionStatus)

export default router;
