// Path: routes/ApisBatchV1Namespaces{namespace}Cronjobs{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteBatchV1NamespacedCronJob } from '../controllers/BatchV1Controller'
import { readBatchV1NamespacedCronJob } from '../controllers/BatchV1Controller'
import { patchBatchV1NamespacedCronJob } from '../controllers/BatchV1Controller'
import { replaceBatchV1NamespacedCronJob } from '../controllers/BatchV1Controller'

import {router} from './router';

router.delete('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', deleteBatchV1NamespacedCronJob)

router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', readBatchV1NamespacedCronJob)

router.patch('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', patchBatchV1NamespacedCronJob)

router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', replaceBatchV1NamespacedCronJob)

export default router;
