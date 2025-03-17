// Path: routes/ApisAutoscalingV1Namespaces{namespace}Horizontalpodautoscalers{name}StatusRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus } from '../controllers/AutoscalingV1Controller'
import { patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus } from '../controllers/AutoscalingV1Controller'
import { replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus } from '../controllers/AutoscalingV1Controller'

import {router} from './router';

router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus)

router.patch('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus)

router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus)

export default router;
