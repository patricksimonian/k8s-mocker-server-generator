// Path: routes/ApisNetworking.k8s.ioRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { getNetworkingAPIGroup } from '../controllers/NetworkingController'

import {router} from './router';

router.get('/apis/networking.k8s.io/', getNetworkingAPIGroup)

export default router;
