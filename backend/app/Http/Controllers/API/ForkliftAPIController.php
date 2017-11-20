<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateForkliftAPIRequest;
use App\Http\Requests\API\UpdateForkliftAPIRequest;
use App\Models\Forklift;
use App\Repositories\ForkliftRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Plank\Mediable\Exceptions\MediaUploadException;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;
use Plank\Mediable\Mediable;
use Plank\Mediable\MediaUploader;
use Plank\Mediable\HandlesMediaUploadExceptions;


/**
 * Class ForkliftController
 * @package App\Http\Controllers\API
 */

class ForkliftAPIController extends AppBaseController
{
    use HandlesMediaUploadExceptions;
    /** @var  ForkliftRepository */
    private $forkliftRepository;

    public function __construct(ForkliftRepository $forkliftRepo)
    {
        $this->forkliftRepository = $forkliftRepo;
    }

    /**
     * Display a listing of the Forklift.
     * GET|HEAD /forklifts
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->forkliftRepository->pushCriteria(new RequestCriteria($request));
        $this->forkliftRepository->pushCriteria(new LimitOffsetCriteria($request));
        $forklifts = $this->forkliftRepository->with('image')->paginate(20);

        return $this->sendResponse($forklifts->toArray(), 'Forklifts retrieved successfully');
    }

    /**
     * Store a newly created Forklift in storage.
     * POST /forklifts
     *
     * @param CreateForkliftAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateForkliftAPIRequest $request)
    {
        $input = $request->all();

        $forklifts = $this->forkliftRepository->create($input);

        return $this->sendResponse($forklifts->toArray(), 'Forklift saved successfully');
    }

    /**
     * Display the specified Forklift.
     * GET|HEAD /forklifts/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Forklift $forklift */
        $forklift = $this->forkliftRepository->with('image')->findWithoutFail($id);

        if (empty($forklift)) {
            return $this->sendError('Forklift not found');
        }

        return $this->sendResponse($forklift->toArray(), 'Forklift retrieved successfully');
    }
    
    
    /**
     * Display the specified Forklift.
     * GET|HEAD /forklifts/{id}
     *
     * @param  int                          $id
     *
     * @param \Illuminate\Http\Request      $request
     *
     * @return \Response
     */
    public function uploadPictures($id, Request $request)
    {
        /** @var Forklift $forklift */
        $forklift = $this->forkliftRepository->with('image')->findWithoutFail($id);
        if (empty($forklift)) {
            return $this->sendError('Forklift not found');
        }
    
        $files = $request->file( "picture" );
        Forklift::imageUpload( $files, $forklift );
        
        $forklift = $this->forkliftRepository->with('image')->findWithoutFail($id);
        
        return $this->sendResponse($forklift->toArray(), 'Forklift retrieved successfully');
    }
    
    /**
     * Display the specified Forklift.
     * GET|HEAD /forklifts/{id}
     *
     * @param  int                     $id
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Response
     */
    public function uploadSignature($id, Request $request)
    {
        /** @var Forklift $forklift */
        $forklift = $this->forkliftRepository->with('image')->findWithoutFail($id);
        if (empty($forklift)) {
            return $this->sendError('Forklift not found');
        }
        
        if (!$request->file('signature')){
            return $this->sendError('Signature must required');
        }
    
        $media = Forklift::signatureUpload( $request->file('signature'));
        $forklift = $this->forkliftRepository->update(['signature' => $media], $id);

        return $this->sendResponse($forklift->toArray(), 'Forklift retrieved successfully');
    }

    /**
     * Update the specified Forklift in storage.
     * PUT/PATCH /forklifts/{id}
     *
     * @param  int $id
     * @param UpdateForkliftAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateForkliftAPIRequest $request)
    {
        $input = $request->all();

        /** @var Forklift $forklift */
        $forklift = $this->forkliftRepository->with('image')->findWithoutFail($id);

        if (empty($forklift)) {
            return $this->sendError('Forklift not found');
        }

        $forklift = $this->forkliftRepository->update($input, $id);

        return $this->sendResponse($forklift->toArray(), 'Forklift updated successfully');
    }

    /**
     * Remove the specified Forklift from storage.
     * DELETE /forklifts/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Forklift $forklift */
        $forklift = $this->forkliftRepository->findWithoutFail($id);

        if (empty($forklift)) {
            return $this->sendError('Forklift not found');
        }

        $forklift->delete();

        return $this->sendResponse($id, 'Forklift deleted successfully');
    }
    
}
