// Path: routes/ApisNetworking.k8s.ioV1WatchServicecidrsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchNetworkingV1ServiceCIDRList } from '../controllers/NetworkingV1Controller'

import {router} from './router';

router.get('/apis/networking.k8s.io/v1/watch/servicecidrs', watchNetworkingV1ServiceCIDRList)

export default router;
