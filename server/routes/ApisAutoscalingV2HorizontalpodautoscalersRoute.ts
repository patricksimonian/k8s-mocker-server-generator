// Path: routes/ApisAutoscalingV2HorizontalpodautoscalersRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces } from '../controllers/AutoscalingV2Controller'

import {router} from './router';

router.get('/apis/autoscaling/v2/horizontalpodautoscalers', listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces)

export default router;
