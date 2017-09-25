from rest_framework.renderers import JSONRenderer


class ValidifyJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        data = {'data': data}
        return super(ValidifyJSONRenderer, self).render(data, accepted_media_type, renderer_context)