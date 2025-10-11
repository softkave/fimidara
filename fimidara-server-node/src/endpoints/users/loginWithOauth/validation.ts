import Joi from 'joi';
import {kValidationSchemas} from '../../../utils/validationUtils.js';

export const loginWithOAuthJoiSchema = Joi.object()
  .keys({
    oauthUserId: kValidationSchemas.providedResourceId.required(),
    emailVerifiedAt: Joi.date().optional(),
    name: Joi.string().required(),
    email: Joi.string().required(),
  })
  .required();
