// Path: routes/ApisEvents.k8s.ioV1WatchNamespaces{namespace}Events{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchEventsV1NamespacedEvent } from '../controllers/EventsV1Controller'

import {router} from './router';

router.get('/apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name', watchEventsV1NamespacedEvent)

export default router;
