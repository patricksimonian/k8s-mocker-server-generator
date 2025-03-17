// Path: routes/ApisAdmissionregistration.k8s.ioV1alpha1Mutatingadmissionpolicybindings{name}Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1alpha1Controller'
import { readAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1alpha1Controller'
import { patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1alpha1Controller'
import { replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding } from '../controllers/AdmissionregistrationV1alpha1Controller'

import {router} from './router';

router.delete('/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicybindings/:name', deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding)

router.get('/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicybindings/:name', readAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding)

router.patch('/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicybindings/:name', patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding)

router.put('/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicybindings/:name', replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding)

export default router;
