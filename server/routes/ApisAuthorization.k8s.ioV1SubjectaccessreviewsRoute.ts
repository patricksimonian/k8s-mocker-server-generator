// Path: routes/ApisAuthorization.k8s.ioV1SubjectaccessreviewsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { createAuthorizationV1SubjectAccessReview } from '../controllers/AuthorizationV1Controller'

import {router} from './router';

router.post('/apis/authorization.k8s.io/v1/subjectaccessreviews', createAuthorizationV1SubjectAccessReview)

export default router;
